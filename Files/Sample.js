const fs=require('fs');
// read file using node
// fs.readFile('./blog.txt',(err,data)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// })
// writing the content to the file
// fs.writeFile('./blog2.txt',"Hey sam ",(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log("Content written successfully");
//     }

// })
// creating directory
// if(!fs.existsSync('./assets'))
// {
// fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("directory created....");
//     }
// })
// }
// // deleting the directory
// else
// {
//     fs.rmdir('./assets',(err)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             console.log("directory deleted successfully...");
//         }
//     })

// }
// deletion of file
if(fs.existsSync('./deletion.txt'))
{
    fs.unlink('./deletion.txt',(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(" file deleted successfully");
        }
    })
}
else
{
    console.log("plz create the file");
}
