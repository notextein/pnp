

const material = {
    maxRowSize: 12,
    defaultMaterialRowSize: 12,
    defaultPruRowSize: 0.5,
    formatMaterialRow: (rowSize) => {
        /*
            rowSize is sometimes passed as 0.5, indicating half of the grid
            all rowSize below 0.5 will be treated as 0.5
            rowSize is sometimes passed as 12, indicating full width
            this function serves as a catch all for these indiosyncrasies
        */
        return ( rowSize > 12 || isNaN(rowSize) || rowSize === undefined || rowSize === null || rowSize > 6 ) ? 12 : 6;
    }

};

let utils = {
    appName : 'Pruone Web',

    material: material,
    getMaterialRowSize: (rowSize) => {
        return material.formatMaterialRow(( rowSize*1 * material.maxRowSize ) || material.defaultMaterialRowSize);
    },
    goToTop() { // scrolls the page back to top
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    getInitials: (firstname, lastname) => {
        return firstname.charAt(0) + lastname.charAt(0);
    },
};

export default utils;