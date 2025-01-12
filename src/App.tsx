import React from 'react';
import './App.css';
import { Accordion } from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRatting";
import {OnOff} from "./components/OnOff/OnOff";

function App(props: any) {

    const [ratingValue, setRatingValue] = React.useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = React.useState<boolean>(true);
    const [on, setOn] = React.useState<boolean>(false);

    const abc = (ddd: boolean) => {
        setOn(ddd)
    }

    return (
        <div className="App">
            {/*<PageTitle title={'This is App component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}


            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating />*/}

            <Accordion
                titleValue={'Menu'}
                accordionCollapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
            />

            {/*<UncontrolledOnOff onChange={setOn}/> {on.toString()}*/}

            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}

            {/*<OnOff on={on} onClick={on => setOn(on)}/>*/}
            {/*<OnOff on={on} onClick={abc}/>*/}
            {/*<OnOff on={on} onClick={setOn}/>*/}

            {/*Article 1*/}
            {/*<Accordion titleValue={'Users'} collapsed={true}/>*/}
            {/*Article 2*/}
            {/*<Rating value={props.raiting}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<UncontrolledOnOff on={false}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (
        <h1>{props.title}</h1>
    );
}


export default App;
