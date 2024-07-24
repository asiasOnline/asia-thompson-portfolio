import React from 'react'
import { Button, Html, Heading, Container, Img, Text } from "@react-email/components";

interface ReceivedEmailProps {
  fullName: string;
}

export const ReceivedEmail: React.FC<Readonly<ReceivedEmailProps>> = ({
  fullName,
}) => {
    return (
      <Html>
        <Container style={container}>

        </Container>
        <Heading as='h1'>Hello there, {fullName}!</Heading>
        <Heading as='h2'>Thank you for reaching out!</Heading>
        <Text>This email is an automatic response letting you know I've received your email.</Text>
        <Text>I will be emailing you back shortly.</Text>
      </Html>
    );
  }

export default ReceivedEmail

  const container = {
    margin: "0 auto",
    padding: "20px 0 48px"
  }
