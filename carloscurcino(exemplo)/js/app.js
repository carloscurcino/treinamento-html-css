const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#create-note");
const closeModalBtn = document.querySelector("#close-modal-btn");
const modalForm = document.getElementById("modal-form");

openModalBtn.addEventListener("click", () => {
    modal.showModal()
    document.body.classList.add("modal-open");
});

closeModalBtn.addEventListener("click", () => {
    modal.close();
    document.body.classList.remove("modal-open");
    modalForm.querySelector('input[type="text"]').value = ""; //Adicionar depois de fazer o submit
    modalForm.querySelector('textarea').value = "";
}); 

modalForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const titleInput = modalForm.querySelector('input[type="text"]');
    const contentTextarea = modalForm.querySelector('textarea');

    const title = titleInput.value;
    const content = contentTextarea.value;
    
    if(title && content){ //Fazer a validação depois de mostrar o alert pegando o conteudo
        window.alert(`Titulo: ${title}\nConteúdo: ${content}`);
        // window.alert("Titulo: " +title+ "\n" + "Conteudo:" +content);
        
        titleInput.value = "";
        contentTextarea.value = "";
        modal.close();
    }else{
        window.alert("Uma nota deve ter titulo e conteudo");
    }
    
});





// modal.addEventListener("click", (event) => {
//     if (event.target === modal) {
//         modal.close();
//         modalForm.querySelector('input[type="text"]').value = "";
//         modalForm.querySelector('textarea').value = "";
//     }
// });