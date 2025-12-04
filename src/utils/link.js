const link = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) =>{
        anchor.addEventListener("click", function(e){
            e.preventDefault();

            const targetld =this.getAttribute("href");
            const targetElement = document.querySelector(targetld);

            if(targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
};

export default link;