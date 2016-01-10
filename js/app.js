/**
 * Created by michiel on 10/01/16.
 */
document.getElementById('jsNav').onclick = function() {

    var className = ' ' + jsNav.className + ' ';

    if ( ~className.indexOf(' active ') ) {
        this.className = className.replace(' active ', ' ');
    } else {
        this.className += ' active';
    }
}