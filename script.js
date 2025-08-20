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
        { name: 'Catálogo Anime Series', url: 'Catalogo_Anime_Series_20250819161231.pdf' },
        { name: 'Catálogo Anime Series Transmisión', url: 'Catalogo_Ánime_Series_Transmisión_20250819153650.pdf' },
        { name: 'Catálogo Documentales', url: 'Catalogo_Documentales_20250819153818.pdf' },
        { name: 'Catálogo Documentales Series', url: 'Catalogo_Documentales_Series_20250819155709.pdf' },
        { name: 'Catálogo Doramas Español', url: 'Catalogo_Doramas_en_Español_20250819155936.pdf' },
        { name: 'Catálogo Doramas Transmisión', url: 'Catalogo_Doramas_en_Transmisión_20250819155939.pdf' },
        { name: 'Catálogo Doramas Subtitulados', url: 'Catalogo_Doramas_Subtitulados_20250819160015.pdf' },
        { name: 'Catálogo Ejercicios en Casa', url: 'Catalogo_Ejercicios_en_Casa_20250819160030.pdf' },
        { name: 'Catálogo Eventos y Premiaciones', url: 'Catalogo_Eventos_y_Premiaciones_20250819160044.pdf' },
        { name: 'Catálogo Eventos y Premiaciones Transmisión', url: 'Catalogo_Eventos__y_Premiaciones_Transmisión_20250819160030.pdf' },
        { name: 'Catálogo Humor', url: 'Catalogo_Humor_20250819160050.pdf' },
        { name: 'Catálogo Novelas Finalizadas', url: 'Catalogo_Novelas_Finalizadas_20250819161118.pdf' },
        { name: 'Catálogo Novelas Subtituladas', url: 'Catalogo_Novelas_Subtituladas_20250819161306.pdf' },
        { name: 'Catálogo Novelas Transmisión', url: 'Catalogo_Novelas_Transmisión_20250819153830.pdf' },
        { name: 'Catálogo Peliculas Copia de Cine', url: 'Catalogo_Películas_Copias_de_Cine_20250819153831.pdf' },
        { name: 'Catálogo Películas Dobladas', url: 'Catalogo_Películas_Dobladas_20250819154434.pdf' },
        { name: 'Catálogo Películas Subtituladas', url: 'Catalogo_Películas_Subtituladas_20250819155351.pdf' },
        { name: 'Catálogo Premiaciones', url: 'Catalogo_Premiaciones_20250819160050.pdf' },
        { name: 'Catálogo Series Cubanas', url: 'Catalogo_Series_Cubanas_20250819160050.pdf' },
        { name: 'Catálogo Series Dobladas', url: 'Catalogo_Series_Dobladas_20250819160324.pdf' },
        { name: 'Catálogo Series Transmisión', url: 'Catalogo_Series_en_Transmision_20250819160421.pdf' },
        { name: 'Catálogo Series Subtituladas', url: 'Catalogo_Series_Subtituladas_20250819160615.pdf' },
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
