class Utils {
    public static addImage(imageId: string, inputId: string) {
        const img = document.getElementById(imageId) as HTMLInputElement;
        const input = document.getElementById(inputId) as HTMLInputElement;

        if (input) {
            input.onchange = () => {
                const file = input.files?.[0];
                if (file)
                    img.src = URL.createObjectURL(file)
            };
        }
    }

    public static openInputFileChooser(inputId: string) {
        document.getElementById(inputId)?.click()
    }
}

export default Utils;