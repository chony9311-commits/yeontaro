import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
const manifest=JSON.parse(await readFile(new URL('./deploy-manifest.json',import.meta.url),'utf8'));
const root=path.resolve('public');
await mkdir(root,{recursive:true});let cursor=0;
async function worker(){while(cursor<manifest.files.length){const entry=manifest.files[cursor++];const destination=path.resolve(root,entry.path);if(!destination.startsWith(root+path.sep))throw new Error('Invalid path');let data;
for(let attempt=0;attempt<3;attempt++){try{const response=await fetch(new URL(entry.path,manifest.origin),{signal:AbortSignal.timeout(30000)});data=Buffer.from(await response.arrayBuffer());if(createHash('sha256').update(data).digest('hex')!==entry.sha256)throw new Error(`Asset mismatch: ${entry.path}`);break}catch(error){if(attempt===2)throw error}}
await mkdir(path.dirname(destination),{recursive:true});await writeFile(destination,data)}}
await Promise.all(Array.from({length:6},()=>worker()));console.log(`Verified ${manifest.files.length} files from ${manifest.sourceCommit}`);
