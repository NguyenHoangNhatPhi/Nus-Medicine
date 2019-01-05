import React from 'react';

import { scaleSzie } from '../utils/func';
import Configs from '../configs';
import commonStyles from '../commonStyles';
import Text from './Text';
import Button from './Button';

export default class ButtonSubmit extends React.PureComponent {

    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        this.props.onPress()
    }

    render() {
        const { title,
            backgroundButton,
            titleColor,
            border 
        } = this.props;
        const temptBackground = backgroundButton ? backgroundButton : Configs.ORANGE;
        const temptTitleColor = titleColor ? titleColor : '#ffffff';
        const temptBorder = border ? border : null
        return (
            <Button onPress={this.onPress} style={[{
                height: scaleSzie(50), backgroundColor: temptBackground,
                borderRadius: scaleSzie(4)
            }, commonStyles.shadowApp, commonStyles.centerHorVer,temptBorder
            ]} >
                <Text style={{ color: temptTitleColor, fontSize: scaleSzie(18), fontWeight: '400', }} >
                    {title}
                </Text>
            </Button>
        );
    }

}