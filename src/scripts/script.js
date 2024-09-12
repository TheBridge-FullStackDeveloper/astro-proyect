var code = '';
let originalCode = '';
let isCodeModified = false;

function addCopyButtons() {
    let codeBlocks = document.querySelectorAll('pre:not(#preCode)');

    codeBlocks.forEach((block, index) => {
        // Crear el botón de copiar
        let button = document.createElement('button');
        block.setAttribute("id", `codeBlock-${index}`);
        button.className = 'copy-button';
        button.type = 'button';
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="copy-icon bi bi-clipboard" viewBox="0 0 16 16"><path d="M5.5 2a.5.5 0 0 1 .5.5V3h4V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V3h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1V2.5a.5.5 0 0 1 .5-.5h1zm-1 2h8v9H4V4zm5-1H7a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1z"/></svg> Copiar';

        // Añadir evento de click al botón
        button.addEventListener('click', async () => {
            let code = block.querySelector('code');
            let text = code.innerText;

            try {
                await navigator.clipboard.writeText(text);
                button.innerHTML = "¡Copiado!";
                setTimeout(() => {
                    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="copy-icon bi bi-clipboard" viewBox="0 0 16 16"><path d="M5.5 2a.5.5 0 0 1 .5.5V3h4V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V3h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1V2.5a.5.5 0 0 1 .5-.5h1zm-1 2h8v9H4V4zm5-1H7a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1z"/></svg> Copiar';
                }, 1000);
            } catch (err) {
                console.error('Error al copiar: ', err);
                button.innerHTML = 'Error';
            }
        }); 
        // Insertar el botón dentro del bloque de código <pre>
        block.appendChild(button);

        //Botones de probar codigo solo si aparece el console.log
        let codeElement = block.querySelector('code');

        if (codeElement && codeElement.innerText.includes('console.log') || codeElement && codeElement.innerText.includes('<script')) {
            let testButton = document.createElement('button');
            testButton.className = 'test-btn';
            testButton.id = 'test-btn';
            testButton.type = 'button';
            testButton.innerHTML = 'Probar código';

            testButton.addEventListener('click', function() {
                document.getElementById("renderedCodeBox").srcdoc = "";
                code = block.querySelector('code').innerText;
                document.getElementById('codeBlock').innerText = code;
                originalCode = code;
                document.querySelector('.modal').showModal();
                document.getElementById("renderedCodeBox").addEventListener("load", function() {
                    var iframeDocument = this.contentDocument || this.contentWindow.document; 
                    var styleElement = document.createElement("style");
                    styleElement.textContent = ".logContainer { color: white; }";
                    iframeDocument.head.appendChild(styleElement);
                });
                
            });

            block.appendChild(testButton);
        }
    });
}
  
document.addEventListener('DOMContentLoaded', function () {
    addCopyButtons();

    // Escuchar el evento astro:after-swap para navegación SPA
    document.addEventListener('astro:after-swap', function () {
        addCopyButtons();
    });

    // Restaurar código original al cerrar el modal
    document.querySelector('.modal').addEventListener('modal-close', function() {
        if (originalCode !== '') {
            document.getElementById('codeBlock').innerText = originalCode;
        }
    })
});