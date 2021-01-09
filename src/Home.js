import { Button } from 'antd';

// import { useState } from "react";

// let name = 'Ardiansyah;'
const createNewBus = (driver, route, passanger, income) => {
    let bus = {
        driver, route, passanger, income
    }
    return bus
}

const join = (name, arrPassanger) => {
    if (arrPassanger.length === 0){
        arrPassanger.push(name);
        console.table(`Welcome abroad ${name}`)
        return arrPassanger;
    }
    else if (arrPassanger.length === 5) {
        console.warn('FULL!! You must WALK!')
    }
    else {
        for (let i = 0; i < arrPassanger.length; i++){
            if (arrPassanger[i] === undefined ){
                arrPassanger[i] = name;
                return arrPassanger;
            }
            else if (arrPassanger[i] === name){
                console.warn(`Are you kidding me ${name}????`);
                return arrPassanger;
            }
            else if (i === arrPassanger.length -1){
                arrPassanger.push(name);
                console.log(`Welcome Abroad ${name}`);
                return arrPassanger;
            }
        }
    }
}

const out = (name, arrPassanger) => {
    if (arrPassanger.length === 0){
        console.warn('Its Empty');
        return arrPassanger;
    }
    else {
        for (let i = 0; i < arrPassanger.length; i++){
            if (arrPassanger[i] === name){
                arrPassanger[i] = undefined;
                console.log(`Have a nice day ${name}`);
                busOne.income += 300;
                console.log('---->  300 Gill Added  <----')
                return arrPassanger;
            }
            else if (i === arrPassanger.length -1){
                console.warn('Theres no such a name in here lad, are you making fun of me?');
                return arrPassanger;
            }
        }
    }
}

let busOne = createNewBus('SHINIGAMI', 'Here and There', [], 0)

const Home = () => {

    const handleClick = () => console.log(join('Régis Blackwood', busOne.passanger));
    const handleClickTwo = () => console.log(join('Vinzenez Appleton', busOne.passanger));
    const handleClickThree = () => console.log(join('Armando Livingstone', busOne.passanger));
    const handleClickFour = () => console.log(join('Fulbert Leighton', busOne.passanger));
    const handleClickFive =()=> console.log(join('Laurenzia Garthside', busOne.passanger));
    const handleClickSix =()=> console.log(join('Natascha Clemons', busOne.passanger))
    const handleClick1 = () => console.log(out('Régis Blackwood', busOne.passanger));
    const handleClick2 = () => console.log(out('Vinzenez Appleton', busOne.passanger));
    const handleClick3 = () => console.log(out('Armando Livingstone', busOne.passanger));
    const handleClick4 = () => console.log(out('Fulbert Leighton', busOne.passanger));
    const handleClick5 = () => console.log(out('Laurenzia Garthside', busOne.passanger));
    const handleClick6 = () => console.log(out('Natascha Clemons', busOne.passanger));
    const handleClick7 = () => console.log(`Your Driver Name Is *${busOne.driver}* \nEnjoy Your RIDE!`);
    const handleClick8 = () => console.table(busOne.passanger)
    const handleClick9 = () => console.log(`Your total INCOME for today is ${busOne.income} GILL`)
    return (
        <div className="home">
            <div className="AddPassanger">
                <h2>Add Passanger In</h2>
                <hr/>
            <Button onClick={handleClick} type="primary">Régis Blackwood</Button>
            <br/> <br/>
            <Button onClick={handleClickTwo} type="primary">Vinzenez Appleton</Button>
            <br/> <br/>
            <Button onClick={handleClickThree} type="primary">Armando Livingstone</Button>
            <br/> <br/>
            <Button onClick={handleClickFour} type="primary">Fulbert Leighton</Button>
            <br/> <br/>
            <Button onClick={handleClickFive} type="primary">Laurenzia Garthside</Button>
            <br/> <br/>
            <Button onClick={handleClickSix} type="primary">Natascha Clemons</Button>
            </div>
            <div className="RemovePassanger">
                <h2>Passanger Out</h2>
                <hr/>
                <Button onClick={handleClick1} type="primary">Régis Blackwood</Button>
            <br/> <br/>
            <Button onClick={handleClick2} type="primary">Vinzenez Appleton</Button>
            <br/> <br/>
            <Button onClick={handleClick3} type="primary">Armando Livingstone</Button>
            <br/> <br/>
            <Button onClick={handleClick4} type="primary">Fulbert Leighton</Button>
            <br/> <br/>
            <Button onClick={handleClick5} type="primary">Laurenzia Garthside</Button>
            <br/> <br/>
            <Button onClick={handleClick6} type="primary">Natascha Clemons</Button>
            </div>
            <div className="BusInfo">
                <h2>Bus Info</h2>
                <hr/>
            <Button onClick={handleClick7} type="primary">Bus Driver</Button>
            <br/> <br/>
            <Button onClick={handleClick8} type="primary">Passanger List</Button>
            <br/> <br/>
            <Button onClick={handleClick9} type="primary">Bus Income</Button>
            </div>
        </div>
    );
}

export default Home;