



let counts = [0, 4, 4, 5, 0, 8, 1, 8, 2];

let columns = [];



function moveIndex(i) {
    //moves index 1 number

    const col = columns[i];


    if (counts[i] === -1) {
        col.classList.remove('no-transition');
        counts[i] += 1;
    }
    

    counts[i] += 1;

    
    const translate = counts[i] * 70;
    
    
    col.style.transform = `translateY(${translate}px)`;
    //col.classList.toggle('no-transition');

    if (counts[i] === 10) {
        counts[i] = -1;

        setTimeout(()=>{
            col.classList.add('no-transition');
            col.style.transform = `translateY(0)`;

        }, 400);
        
        if (i > 0) {
            moveIndex(i-1);
        }
    } 
    
   
}








function setUp() {
    const template = document.getElementById('number-col-template');
    const parent = document.getElementById('number-ticker');

    const singleTime = 5000;
   

    for (let i=0;i<9;i+=1) {
        const clone = template.cloneNode(true);
        clone.id = null;
        parent.appendChild(clone);

        const translate = counts[i] * 70;
        clone.style.transform = `translateY(${translate}px)`;

        columns.push(clone);
        

    }

    const clone = template.cloneNode(true);
    clone.id = null;
    clone.classList.add('singles');
    parent.appendChild(clone);

    setInterval(()=> {
        moveIndex(columns.length - 1);
    }, (singleTime / 10) * 9);

}

setUp();