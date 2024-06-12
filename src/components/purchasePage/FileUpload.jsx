export const FileUpload = ()=>{
    return (
        <input type="file" onChange={(e)=>{
            console.log(e.target.files[0])
        }}/>
    )
}