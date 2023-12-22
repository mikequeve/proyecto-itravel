const d = document;

export default function currentYear(){
    const $date = new Date(),
    $year = $date.getFullYear();
    d.getElementById('current-year').innerHTML = $year;
}