'use client';

import { useTheme } from '@/app/theme-provider';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/tabs';
import { Toggle } from '@/shared/ui/toggle';

export default function Home() {
  const { toggleTheme } = useTheme();

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={toggleTheme}>Click me</Button>
        <Toggle>Toggle</Toggle>
        <Tabs>
          <TabsList>
            <TabsTrigger value={'1'}>Tab 1</TabsTrigger>
            <TabsTrigger value={'2'}>Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value={'1'}>
            <p>Tab 1 content</p>
            <p>Tab 2 content</p>
          </TabsContent>
          <TabsContent value={'2'}>
            <p>Tab 1 content</p>
            <p>Tab 2 content</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
