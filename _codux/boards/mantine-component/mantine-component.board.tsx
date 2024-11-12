import { createBoard } from '@wixc3/react-board';
import MantineComponent from '../../../src/components/mantine-component/mantine-component';
import { MantineProvider } from '@mantine/core';

export default createBoard({
    name: 'MantineComponent',
    Board: () => 
    <MantineProvider>
    <MantineComponent />
    </MantineProvider>
});
