    const parent = document.getElementById("parentCheck");
    // ühendab htmli id parent constantiga 
    // ja kõik class-iga child.check elemendid childreniks
    const children = document.querySelectorAll(".child-check");
  
    //funktsioon, mis kontrollib, mitu child chedk on cheked 
    //ja vastavalt sellele muudab parent -checki cheked ja indeterminate omadusi
    function updateParent() {
        //loeme mitu child check on checked
        const checked = [...children].filter(c => c.checked).length;

        //=== võrdub väärtusega ja tüübiga,
        //== kas kaks muutujat on väärtuselt võrdsed, kuid tüüp võib olla erinev
        //= See on lihtsalt omistamine, kus ühele poolele pannakse väärtus
        // ja seejärel see väärtus omistatakse teisele poolele. NT, let x = 5;
        if (checked === 0) {
            parent.checked = false;
            parent.indeterminate = false;
        } else if (checked === children.length) {
            parent.checked = true;
            parent.indeterminate = false;
        } else {
            parent.checked = false;
            parent.indeterminate = true;
        }
    }
    // Lida event listenerid kõigile childcheck elementidele,
    //mis kutsuvad updateParent funktsiooni
    children.forEach(c => c.addEventListener("change", updateParent));
    // Lisa event Listener parent-check elementile
    //mis muudab kõigi Child-check elementide checked omadust
    //vastavalt parent-checki cheked omadusele
    parent.addEventListener("change", () => {
        children.forEach(c => c.checked = parent.checked);
        parent.indeterminate = false;
    });
