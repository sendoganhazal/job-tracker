"use client";
import { Card } from '@primereact/ui/card';
export default function Home() {
  return (
    <>
        <Card.Root className="max-w-sm mx-auto">
            <Card.Body className="space-y-4">
                <Card.Caption>
                    <Card.Title>Starter Plan</Card.Title>
                    <Card.Subtitle>For personal projects</Card.Subtitle>
                </Card.Caption>

                <Card.Content>
                    <p className="m-0">Includes essential features, basic analytics and access to community support.</p>
                </Card.Content>
                <Card.Footer className="text-sm text-surface-500 dark:text-surface-400">Cancel anytime. No credit card required.</Card.Footer>
            </Card.Body>
        </Card.Root>
    </>
  );
}
