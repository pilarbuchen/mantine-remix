import { createBoard } from '@wixc3/react-board';
import MantineComponent from '../../../src/components/mantine-component/mantine-component';

export default createBoard({
    name: 'MantineComponent',
    Board: () => <MantineComponent />,
});
