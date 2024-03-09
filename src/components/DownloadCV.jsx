import DownloadIcon from "../assets/icons/DownloadIcon.astro";
import SocialIcons from "../components/SocialIcons.astro";
import pdf from "../assets/docs/cv.pdf";

function DownloadCv() {
    const handleDownloadCV = () => {
        const pdfUrl = pdf;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className="flex justify-center items-center gap-0 sm:gap-2 h-full w-full" onClick={() => handleDownloadCV()} >
            <div class="size-6">
                <svg
                    class="icon icon-tabler icon-tabler-download flex justify-center items-center"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                    d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path><path
                        d="M7 11l5 5l5 -5"></path><path d="M12 4l0 12"></path></svg>
            </div>
            <div>
                <span class="hidden sm:block">CV</span>
            </div>
        </button>
    )
}

export default DownloadCv