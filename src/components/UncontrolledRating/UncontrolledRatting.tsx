import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type UncontrolledRatingType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

// export function UncontrolledRating(props: RatingPropsType) {
function UncontrolledRatingSecret(props: UncontrolledRatingType) {
    console.log('rating rendering')

    const [value, setValue] = React.useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} setValue={() => { setValue(1); props.onChange(1) } } />
            <Star selected={value > 1} setValue={() => { setValue(2); props.onChange(2) } } />
            <Star selected={value > 2} setValue={() => { setValue(3); props.onChange(3) } } />
            <Star selected={value > 3} setValue={() => { setValue(4); props.onChange(4) } } />
            <Star selected={value > 4} setValue={() => { setValue(5); props.onChange(5) } } />

        </div>
    )
}
export const UncontrolledRating = React.memo(UncontrolledRatingSecret)

type StarPropsType = {
    selected: boolean
    setValue: () => void
}


// const  av = styled.Star`
//     border: none;
//     background-color: #c748ff;
//     padding: 10px 20px;
//     border-radius: 5px;
//     color: snow;
//     font-size: 2rem;
//     font-weight: bold;
// `

function StarSecret(props: StarPropsType) {

    return (
       <span onClick={props.setValue}>
           { props.selected ? <b>Star </b> : 'Star ' }
       </span>
    )
}
const Star = React.memo(StarSecret)
