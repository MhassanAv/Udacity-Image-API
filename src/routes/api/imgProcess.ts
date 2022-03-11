import sharp from "sharp";
//image-processing API main funcation 
async function resizeImage(name: string, w: string, h: string): Promise<void> {
    try {
        await sharp(`./images/${name}.jpg`)
            .resize({
                width: parseInt(w,10) ,
                height: parseInt(h,10)
            })
            .toFile(`./temp/${name}resized.jpg`)

    } catch (error) {
        //error handling
        console.log(error);
    }

}
export default resizeImage;