export default function () {
    var state=false;
    var funtype=0;
    function Over(){
        state = true;
    }
    function Leave() {
        funtype = 1;
        setTimeout(NoDisplay, 300);
    }
    function NoDisplay() {
        if (funtype == 1) {
            state = false;
        }
    }

    return{
        Over,Leave,NoDisplay
    }
}

