// 'use strict';

// const units = ['m', 'cm', 'inc', 'ft'];

// const insertData = {
//     distance: {
//         unit: 'm',
//         value: ''
//     },
//     convert_to: 'm'
// }

// const unitSelector = document.querySelector('#unit');
// const unitConvert = document.querySelector('#unit-convert');
// const inputLength = document.querySelector('#length');
// const btn = document.querySelector('#btn');


// function iterArray(unit, parentNode) {

//     unit.map(item => {
//         parentNode.insertAdjacentHTML('afterbegin', `<option>${item}</option>`)
//     })
// }

// iterArray(units, unitSelector);
// iterArray(units, unitConvert);

// function selected(node) {
//     node.addEventListener('change', (e) => {
//         const unitSelect = e.target.value;
//         console.log(e.target.id)

//         if(e.target.id === 'unit') {
//             insertData.distance.unit = unitSelect;
//         } else {
//             insertData.convert_to = unitSelect;
//         }

//         console.log(insertData);
//     })
// }

// selected(unitSelector);
// selected(unitConvert);


// inputLength.addEventListener('input', (e) => {
//     const value = e.target.value;
//     if(+value) {
//         insertData.distance.value = value;
//     } else {
//         alert('please enter the number')
//     }
//     console.log(insertData);
// })

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const convertData = JSON.stringify(insertData);
//     console.log(convertData);
//     converter(convertData)
// })

// class Convert {
//         constructor(m, ft, cm, inc) {
//             this.m = m;
//             this.ft = ft;
//             this.cm = cm;
//             this.inc = inc;
//         }
// }




// function converter(data) {
// const newData = JSON.parse(data);
//     switch(newData.distance.unit) {
//         case 'm':
//             const meters = new Convert(1, 3.2808, 0.01, 39.370);
//             conv(newData.distance.value, meters[newData.convert_to], newData.convert_to);
//             break;
        
//         case 'ft':
//             const feet = new Convert(3.2808, 1, 0.032808, 12);
//             conv(newData.distance.value, feet[newData.convert_to], newData.convert_to);
//             break;
        
//         case 'cm':
//             const cm = new Convert(100, 1, 0.032808, 0.39370); 
//             conv(newData.distance.value, cm[newData.convert_to], newData.convert_to);
//             break;
        
//         case 'inc':
//             const inc = new Convert(39.370, 0.083333, 0.39370, 1);
//             conv(newData.distance.value, inc[newData.convert_to], newData.convert_to);
//             break;
//     }
// }


// function conv(firstValue, secondValue, toUnit) {
//     const math = firstValue/secondValue;
//     const outputData = {
//         unit: toUnit,
//         value: math.toFixed(2)
//     }

//     inputLength.innerText = outputData.value + outputData.unit;

//     console.log(JSON.stringify(outputData));
// }


// const insertData = {
//     distance: {
//         unit: 'm',
//         value: ''
//     },
//     convert_to: 'm'
// }
