import {db, ClassicMode} from 'astro:db';

export default async function () {
    await db.insert(ClassicMode).values([
        {
            id: 1,
            typeface: 'Helvetica',
            questions: [
                {name: "Helvetica", valid: true},
                {name: "Arial", valid: false},
                {name: "Roboto", valid: false},
                {name: "Myriad", valid: false}
            ]
        },
        {
            id: 2,
            typeface: 'ArialBlack',
            questions: [
                {name: "Arial Black", valid: true},
                {name: "Helvetica", valid: false},
                {name: "Impact", valid: false},
                {name: "Futura Bold", valid: false}
            ]
        },
        {
            id: 3,
            typeface: 'GeorgiaBold',
            questions: [
                {name: "Georgia Bold", valid: true},
                {name: "Times New Roman", valid: false},
                {name: "Baskerville Bold", valid: false},
                {name: "Rockwell", valid: false}
            ]
        }
    ])
}