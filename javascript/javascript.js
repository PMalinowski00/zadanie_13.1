'use strict';

var data = [{
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important']
    },
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important']
    },
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important']
    },
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted']
    },
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
    },
];



function Box(boxData) {

    for (var i = 0; i < data.length; i++) {
        var boxId = boxData[i].id;
        var boxTitle = boxData[i].title;
        var boxContent = boxData[i].content;
        var categoriesIndexZero = boxData[i].categories[0];
        var categoriesIndexOne = boxData[i].categories[1];
        var categoriesIndexTwo = boxData[i].categories[2];

        console.log(newBox)

        var newBox = document.createElement('div');
        var newHeader = document.createElement('header');

        newBox.className = 'box';
        newHeader.className = 'header';
        console.log(newBox)
        console.log(categoriesIndexZero, categoriesIndexOne, categoriesIndexTwo)

        newHeader.innerHTML = boxTitle + boxContent;
        newBox.id = boxId;
        document.body.appendChild(newBox).appendChild(newHeader);

        if (categoriesIndexZero || categoriesIndexOne || categoriesIndexTwo == 'highlighted') {
            document.getElementById(boxId).classList.add('highlighted');
            console.log(newBox)
        }
        if (categoriesIndexZero || categoriesIndexOne || categoriesIndexTwo == 'special-header') {
            console.log(newBox)
            newHeader.classList.add('special-header');
        }
        if (categoriesIndexZero || categoriesIndexOne || categoriesIndexTwo == 'important') {
            console.log(newBox)
            document.getElementById(boxId).classList.add('important');
        }

    }

}
Box(data);