import { Stack } from '@chakra-ui/react';

import Navigation from "./Navigation";

const Layout = ({children}) => (
    <Stack direction="row">
        <header>
            <Navigation />
        </header>
        <main>
            {children}
        </main>
    </Stack>
)

export default Layout;
