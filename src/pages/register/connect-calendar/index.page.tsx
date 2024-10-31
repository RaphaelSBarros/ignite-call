import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { ConnectBox, ConnectItem } from "./styles";
import { ArrowRight } from "phosphor-react";
import { Container, Header } from "../styles";

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte ao seu calendário para verificar automaticamente as horas
          ocuopadas e os novos eventos a medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
