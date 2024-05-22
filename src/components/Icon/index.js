import React from 'react'
import SVGS from '@/assets/svg'
import { TouchableOpacity, View } from 'react-native'
import { appStyle } from '@/theme'
import { color } from '@/configs'
import PropTypes from 'prop-types'


const Icon = ({ name, size = 25, width, height, color, ...rest }) => {
    const w = width | size
    const h = height | size
    const SVGIcon = SVGS[name]
    if (SVGIcon)
        return (<SVGIcon width={w} height={h} fill={color} {...rest} />)
    return (<View />)

}
export const IconButton = ({ name, size = 25, width, height, color, onPress, disabled, style = {}, ...rest }) => {
    return (
        <TouchableOpacity disabled={disabled} style={[appStyle.center, style]}
            onPress={onPress}
        >
            <Icon name={name} size={size} width={width} height={height} color={color} {...rest} />
        </TouchableOpacity>
    )
}

export default Icon



