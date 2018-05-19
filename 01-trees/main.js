window.app = ((()=>{

    // ...
    const IMG_WIDTH = 800; // px

    // ...
    let margin = -1 * IMG_WIDTH / 2;


    // ...
    let getRenderedHtml = ( imgSrc, imgMargin, imgAnimation ) => {
        return `
            <li class="tile ${ imgAnimation }" style="margin-top: ${ imgMargin }px; margin-left: ${ imgMargin }px">
                <img src="img/${ imgSrc }" width="${ IMG_WIDTH }" />
            </li>
        `;
    };

    // ...
    let renderImages = ( images, parentElem ) => {
        parentElem = parentElem || document.createElement( "ul" );
        parentElem.classList.add( "canvas" );

        images.forEach( img => parentElem.innerHTML += getRenderedHtml( img.src, margin, img.anim ) );

        document.body.appendChild( parentElem );
    };


    // ...
    let init = ( conf ) => {
        renderImages( conf.images );
        console.log( "Initialized..." );
    }


    // ...
    return { init };
})());