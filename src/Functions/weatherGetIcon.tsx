export const getIcon = (id:number) => {
    let icon
    let fog = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-fog" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 16a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
    <line x1="5" y1="20" x2="19" y2="20" />
    </svg>
    let cloudrain = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-rain" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
    <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
    </svg>
    let snow = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-snow" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
    <path d="M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01" />
    </svg>
    let thunder = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-storm" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
    <polyline points="13 14 11 18 14 18 12 22" />
    </svg>
    let clear = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="12" cy="12" r="4" />
    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
    let cloud = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
    </svg>
    let error = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>

    if(id >= 200 && id < 300) {
        icon = thunder
    } else if(id >= 300 && id < 400) {
        icon = cloudrain
    } else if(id >= 500 && id < 600) {
        icon = cloudrain
    } else if(id >= 600 && id < 700) {
        icon = snow
    } else if(id >= 700 && id < 800) {
        icon = fog
    } else if(id === 800) {
        icon = clear
    } else if(id > 800 && id < 900) {
        icon = cloud
    } else {
        icon = error
    }
    return icon
}