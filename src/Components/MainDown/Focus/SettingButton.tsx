import React from 'react'

const SettingButton = (props:any) => {
    return (
        <i onClick={props.handleChangeSettingDisplay} className="fas fa-ellipsis-h settingFocus"></i>
    )
}

export default SettingButton