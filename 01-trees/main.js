window.app = ((()=>{

    // ...
    const IMG_WIDTH = 800; // px

    // ...
    let margin = -1 * IMG_WIDTH / 2;


    // ...
    let getRenderedHtml = ( imgSrc, imgMargin, imgAnimation ) => {
        if( !imgSrc )
            // Return the background tile:
            return `<li class="tile" style="width: ${ IMG_WIDTH }px; height: ${ IMG_WIDTH }px; margin-top: ${ imgMargin }px; margin-left: ${ imgMargin }px"></li>`;

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

        parentElem.innerHTML = getRenderedHtml( null, margin ); // for bkg layer
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