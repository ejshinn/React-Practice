// Ex3Menu.jsx

import EX3MenuItem from "./EX3MenuItem.jsx";

const menuList = [
    {id: 1, name: 'Bread Basket', desc: 'Assortment of fresh baked fruit breads and muffins', price: 5.50},
    {id: 2, name: 'Honey Almond Granola with Fruits', desc: 'Natural cereal of honey toasted oats, raisins, almonds and dates', price: 7.00},
    {id: 3, name: 'Belgian Waffle', desc: 'Vanilla flavored batter with malted flour', price: 7.50},
    {id: 4, name: 'Scrambled eggs', desc: 'Scrambled eggs, roasted red pepper and garlic, with green onions', price: 7.50},
    {id: 5, name: 'Blueberry Pancakes', desc: 'With syrup, butter and lots of berries', price: 8.50},
];

function EX3Menu() {
    return (
        <div className={'row my-5'}>
            <div className={'col-sm px-3'}>
                <h1>Our Menu</h1>
                {
                    menuList.map(item => {
                        return <EX3MenuItem menu={item} key={item.id}/>
                    })
                }
            </div>
            <div className={'col-sm px-3 d-flex justify-content-end'}>
                <img className={'mw-100'} src={'https://www.w3schools.com/w3images/tablesetting.jpg'} alt={''}/>
            </div>
        </div>
    );
}

export default EX3Menu;