'use strict';

const ads = document.querySelector('.ads');
ads.remove();

const itemList = document.querySelectorAll('.item');
itemList[3].after(itemList[0]);

const itemTitle = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');

const tmpList = propsList[2].cloneNode(true);
propsList[2].replaceWith(propsList[4]);
itemTitle[3].after(tmpList);

const propsItemFour = document.querySelectorAll('.props__item_four');
const propsItemTwo = document.querySelectorAll('.props__item_two');
const propsItemFive = document.querySelectorAll('.props__item_five');

propsItemFour[3].after(propsItemFour[0]);
propsItemTwo[7].after(propsItemTwo[8]);
propsItemTwo[8].after(propsItemTwo[9]);

const tmpTitle = itemTitle[0].cloneNode(true);
const tmpTitle3 = itemTitle[4].cloneNode(true);
itemTitle[0].replaceWith(itemTitle[3]);
itemTitle[4].replaceWith(tmpTitle);
propsItemFive[0].prepend(tmpTitle3);

itemTitle[1].textContent = 'This и прототипы объектов';
