import {
    Platform
} from 'react-native';

const configs = {
    VERSION: "1.0.0",
    DEFAULT_WIDTH: Platform.OS === 'ios' ? 414 : 414,
    DEFAULT_HEIGHT: Platform.OS === 'ios' ? 736 : 736,
}

export default configs; 