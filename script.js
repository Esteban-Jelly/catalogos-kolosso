document.addEventListener('DOMContentLoaded', () => {
    const lastUpdatedElement = document.getElementById('last-updated');
    const catalogListElement = document.getElementById('catalog-list');

    const lastUpdatedDate = '08 de septiembre de 2025';
    lastUpdatedElement.textContent = lastUpdatedDate;

    const catalogos = [
        { name: 'Catálogo Animados', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Animados.pdf' },
        { name: 'Catálogo Animados Series', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Animados_Series.pdf' },
        { name: 'Catálogo Anime Películas', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Anime_Películas.pdf' },
        { name: 'Catálogo Anime Series', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Anime_Series.pdf' },
        { name: 'Catálogo Anime Series Transmisión', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Ánime_Series_Transmisión.pdf' },
        { name: 'Catálogo Documentales', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Documentales.pdf' },
        { name: 'Catálogo Documentales Series', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Documentales_Series.pdf' },
        { name: 'Catálogo Doramas Español', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Doramas_en_Español.pdf' },
        { name: 'Catálogo Doramas Transmisión', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Doramas_en_Transmisión.pdf' },
        { name: 'Catálogo Doramas Subtitulados', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Doramas_Subtitulados.pdf' },
        { name: 'Catálogo Ejercicios en Casa', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Ejercicios_en_Casa.pdf' },
        { name: 'Catálogo Eventos y Premiaciones', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Eventos_y_Premiaciones.pdf' },
        { name: 'Catálogo Eventos y Premiaciones Transmisión', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Eventos__y_Premiaciones_Transmisión.pdf' },
        { name: 'Catálogo Humor', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Humor.pdf' },
        { name: 'Catálogo Novelas Finalizadas', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Novelas_Finalizadas.pdf' },
        { name: 'Catálogo Novelas Subtituladas', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Novelas_Subtituladas.pdf' },
        { name: 'Catálogo Novelas Transmisión', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Novelas_Transmisión.pdf' },
        { name: 'Catálogo Películas Copia de Cine', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Películas_Copias_de_Cine.pdf' },
        { name: 'Catálogo Películas Dobladas', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Películas_Dobladas.pdf' },
        { name: 'Catálogo Películas Subtituladas', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Películas_Subtituladas.pdf' },
        { name: 'Catálogo Premiaciones', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Premiaciones.pdf' },
        { name: 'Catálogo Series Cubanas', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Series_Cubanas.pdf' },
        { name: 'Catálogo Series Dobladas', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Series_Dobladas.pdf' },
        { name: 'Catálogo Series Transmisión', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Series_en_Transmision.pdf' },
        { name: 'Catálogo Series Subtituladas', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Series_Subtituladas.pdf' },
        { name: 'Catálogo Vídeos Musicales', url: 'https://media.githubusercontent.com/media/Esteban-Jelly/catalogos-kolosso/main/Catalogo_Vídeos_Musicales.pdf' },
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
