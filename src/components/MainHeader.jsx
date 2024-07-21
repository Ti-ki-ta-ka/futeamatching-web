import { Button, TextInput, Drawer, ActionIcon } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { IconAdjustments } from '@tabler/icons-react';

const MainHeader = () => {
  const [opened, { open, close }] = useDisclosure(false);


  return (
    <>
    <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication">
      {/* Drawer content */}
    </Drawer>

    <ActionIcon variant="default" aria-label="Settings" onClick={open}>
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  </>
  );
};

export default MainHeader;
