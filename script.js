document.addEventListener('DOMContentLoaded', () => {
    const lastUpdatedElement = document.getElementById('last-updated');
    const catalogListElement = document.getElementById('catalog-list');

    const lastUpdatedDate = '20 de agosto de 2025';
    lastUpdatedElement.textContent = lastUpdatedDate;

    const catalogos = [
        { name: 'Catálogo Animados', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Animados_20250819155850.pdf' },
        { name: 'Catálogo Animados Series', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Animados_Series_20250819160729.pdf' },
        { name: 'Catálogo Anime Películas', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Anime_Películas_20250819161033.pdf' },
        { name: 'Catálogo Anime Series', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Anime_Series_20250819161231.pdf' },
        { name: 'Catálogo Anime Series Transmisión', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Ánime_Series_Transmisión_20250819153650.pdf' },
        { name: 'Catálogo Documentales', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Documentales_20250819153818.pdf' },
        { name: 'Catálogo Documentales Series', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Documentales_Series_20250819155709.pdf' },
        { name: 'Catálogo Doramas Español', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Doramas_en_Español_20250819155936.pdf' },
        { name: 'Catálogo Doramas Transmisión', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Doramas_en_Transmisión_20250819155939.pdf' },
        { name: 'Catálogo Doramas Subtitulados', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Doramas_Subtitulados_20250819160015.pdf' },
        { name: 'Catálogo Ejercicios en Casa', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Ejercicios_en_Casa_20250819160030.pdf' },
        { name: 'Catálogo Eventos y Premiaciones', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Eventos_y_Premiaciones_20250819160044.pdf' },
        { name: 'Catálogo Eventos y Premiaciones Transmisión', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Eventos__y_Premiaciones_Transmisión_20250819160030.pdf' },
        { name: 'Catálogo Humor', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Humor_20250819160050.pdf' },
        { name: 'Catálogo Novelas Finalizadas', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Novelas_Finalizadas_20250819161118.pdf' },
        { name: 'Catálogo Novelas Subtituladas', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Novelas_Subtituladas_20250819161306.pdf' },
        { name: 'Catálogo Novelas Transmisión', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Novelas_Transmisión_20250819153830.pdf' },
        { name: 'Catálogo Películas Copia de Cine', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Películas_Copias_de_Cine_20250819153831.pdf' },
        { name: 'Catálogo Películas Dobladas', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Películas_Dobladas_20250819154434.pdf' },
        { name: 'Catálogo Películas Subtituladas', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Películas_Subtituladas_20250819155351.pdf' },
        { name: 'Catálogo Premiaciones', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Premiaciones_20250819160050.pdf' },
        { name: 'Catálogo Series Cubanas', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Series_Cubanas_20250819160050.pdf' },
        { name: 'Catálogo Series Dobladas', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Series_Dobladas_20250819160324.pdf' },
        { name: 'Catálogo Series Transmisión', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Series_en_Transmision_20250819160421.pdf' },
        { name: 'Catálogo Series Subtituladas', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Series_Subtituladas_20250819160615.pdf' },
        { name: 'Catálogo Vídeos Musicales', url: 'https://raw.githubusercontent.com/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Vídeos_Musicales_20250819160837.pdf' },
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
