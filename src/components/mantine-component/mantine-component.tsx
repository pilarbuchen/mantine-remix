import React from 'react';
import { Button, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const MantineComponent: React.FC = () => (
    <MantineProvider>
        <div className="container">
            <p className="myStyle">
                HELLO
            </p>
            <p className="myParagraph">
                This is a Mantine component.
            </p>
            <Button>Hello</Button>
        </div>
    </MantineProvider>
);

export default MantineComponent;
