document.addEventListener('DOMContentLoaded', () => {
    const lastUpdatedElement = document.getElementById('last-updated');
    const catalogListElement = document.getElementById('catalog-list');

    const lastUpdatedDate = '20 de agosto de 2025'; // Cambia esta fecha con la última actualización
    lastUpdatedElement.textContent = lastUpdatedDate;

    const catalogos = [
        // Catálogos pequeños
        { name: 'Catálogo Animados', url: 'Catalogo_Animados_20250819155850.pdf' },
        { name: 'Catálogo Animados Series', url: 'Catalogo_Animados_Series_20250819160729.pdf' },
        { name: 'Catálogo Anime Películas', url: 'Catalogo_Anime_Películas_20250819161033.pdf' },
        // ...otros catálogos pequeños

        // Catálogos grandes (verificar nombres)
        { name: 'Catálogo Películas Dobladas', url: 'Catalogo_Películas_Dobladas_20250819154434.pdf' },
        { name: 'Catálogo Películas Subtituladas', url: 'Catalogo_Películas_Subtituladas_20250819155351.pdf' },
        { name: 'Catálogo Vídeos Musicales', url: 'Catalogo_Vídeos_Musicales_20250819160837.pdf' },
    ];

    catalogos.forEach(catalogo => {
        const catalogItem = document.createElement('div');
        catalogItem.className = 'catalog-item';
        catalogItem.innerHTML = `
            <h2>${catalogo.name}</h2>
            <a href="${catalogo.url}" class="download-button" download>Descargar</a>
        `;
        catalogListElement.appendChild(catalogItem);
    });
});
