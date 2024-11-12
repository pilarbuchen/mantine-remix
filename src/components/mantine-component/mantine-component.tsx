import { useState } from 'react';
import {
    AppShell,
    Container,
    Title,
    Text,
    Button,
    Card,
    Group,
    Grid,
    Center,
    Stack,
    Burger,
    Avatar,
    Menu,
    ActionIcon,
    useMantineTheme,
    List,
    ThemeIcon,
    createTheme,
    rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconRocket,
    IconArrowRight,
    IconSun,
    IconMoonStars,
    IconUser,
    IconSettings,
    IconLogout,
    IconBrandGithub,
} from '@tabler/icons-react';
import '@mantine/core/styles.css';

// Create custom theme
const theme = createTheme({
    primaryColor: 'blue',
    fontFamily: 'Inter, sans-serif',
});

export function MantineComponent() {
    const [opened, { toggle }] = useDisclosure();
    const [darkMode, setDarkMode] = useState(false);
    const mantineTheme = useMantineTheme();

    const toggleColorScheme = () => {
        setDarkMode(!darkMode);
    };

    const features = [
        {
            title: 'Modern UI Components',
            description: 'Pre-built, customizable components for rapid development',
            icon: IconRocket,
        },
        {
            title: 'Theme Customization',
            description: 'Flexible theming system with dark mode support',
            icon: IconSettings,
        },
        {
            title: 'Developer Experience',
            description: 'TypeScript support and excellent documentation',
            icon: IconBrandGithub,
        },
    ];

    return (
            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md" justify="space-between">
                        <Group>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                            <Title order={3}>Mantine App</Title>
                        </Group>
                        <Group>
                            <ActionIcon variant="default" onClick={toggleColorScheme} size="lg">
                                {darkMode ? (
                                    <IconSun size="1.2rem" />
                                ) : (
                                    <IconMoonStars size="1.2rem" />
                                )}
                            </ActionIcon>
                            <Menu shadow="md" width={200}>
                                <Menu.Target>
                                    <Avatar
                                        radius="xl"
                                        src="https://avatars.githubusercontent.com/u/10353856?s=460&v=4"
                                        alt="User avatar"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Label>Application</Menu.Label>
                                    <Menu.Item leftSection={<IconUser size={14} />}>
                                        Profile
                                    </Menu.Item>
                                    <Menu.Item leftSection={<IconSettings size={14} />}>
                                        Settings
                                    </Menu.Item>
                                    <Menu.Divider />
                                    <Menu.Item color="red" leftSection={<IconLogout size={14} />}>
                                        Logout
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar p="md">
                    <Stack>
                        <Title order={4}>Navigation</Title>
                        <List spacing="xs" size="sm" center>
                            {['Dashboard', 'Projects', 'Team', 'Reports'].map((item) => (
                                <List.Item key={item} style={{ cursor: 'pointer' }}>
                                    {item}
                                </List.Item>
                            ))}
                        </List>
                    </Stack>
                </AppShell.Navbar>

                <AppShell.Main>
                    <Container size="lg">
                        {/* Hero Section */}
                        <Stack align="center" pt={rem(50)} pb={rem(80)}>
                            <Title
                                order={1}
                                size="3rem"
                                style={{ textAlign: 'center' }}
                                variant="gradient"
                            >
                                Build Better Apps Faster
                            </Title>
                            <Text size="xl" c="dimmed" maw={600} ta="center">
                                A fully featured React components library that helps you build
                                professional user interfaces.
                            </Text>
                            <Group>
                                <Button size="lg" radius="md">
                                    Get Started
                                </Button>
                                <Button size="lg" variant="light" radius="md">
                                    Documentation
                                </Button>
                            </Group>
                        </Stack>

                        {/* Features Section */}
                        <Grid gutter="xl" mb={80}>
                            {features.map((feature, index) => (
                                <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={index}>
                                    <Card shadow="sm" padding="xl" radius="md" withBorder>
                                        <ThemeIcon
                                            size={50}
                                            radius="md"
                                            variant="light"
                                            color="blue"
                                            mb="md"
                                        >
                                            <feature.icon size={26} />
                                        </ThemeIcon>
                                        <Title order={4} mb="xs">
                                            {feature.title}
                                        </Title>
                                        <Text size="sm" c="dimmed">
                                            {feature.description}
                                        </Text>
                                        <Button
                                            variant="light"
                                            color="blue"
                                            fullWidth
                                            mt="md"
                                            radius="md"
                                        >
                                            Learn more
                                            <IconArrowRight
                                                size={18}
                                                style={{ marginLeft: '8px' }}
                                            />
                                        </Button>
                                    </Card>
                                </Grid.Col>
                            ))}
                        </Grid>

                        {/* CTA Section */}
                        <Center mb={80}>
                            <Card
                                shadow="md"
                                radius="lg"
                                padding="xl"
                                style={{
                                    maxWidth: 800,
                                    width: '100%',
                                }}
                            >
                                <Stack align="center">
                                    <Title order={2} c="white" ta="center">
                                        Ready to Start Building?
                                    </Title>
                                    <Text c="white" size="lg" maw={500} ta="center">
                                        Join thousands of developers who are already building
                                        amazing applications with Mantine.
                                    </Text>
                                    <Group>
                                        <Button size="lg" color="white" variant="filled">
                                            Get Started
                                        </Button>
                                        <Button size="lg" variant="white">
                                            View on GitHub
                                        </Button>
                                    </Group>
                                </Stack>
                            </Card>
                        </Center>
                    </Container>
                </AppShell.Main>
            </AppShell>
    );
}

export default MantineComponent;
