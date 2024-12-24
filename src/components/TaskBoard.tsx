import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes";
import { Task } from "../entities/Task";
import { TaskCard } from "./TaskCard";

export const TaskBoard: React.FC = () => {
  const tasksTodo: Task[] = [
    {
      id: 4,
      title: "Implementar testes",
      description:
        "Desenvolver os testes automatizados na nova funcionalidade do aplicativo.",
      status: "todo",
      priority: "medium",
    },
  ];
  const tasksInProgress: Task[] = [
    {
      id: 1,
      title: "Enviar relatório",
      description: "Enviar o relatório mensal para o departamento financeiro.",
      status: "doing",
      priority: "high",
    },
  ];
  const tasksDone: Task[] = [
    {
      id: 3,
      title: "Atualizar o site",
      description:
        "Fazer atualizações no site da empresa com novas informações.",
      status: "done",
      priority: "medium",
    },
  ];

  return (
    <ScrollArea scrollbars="horizontal">
      <Grid columns="3" gap="4" minWidth="64rem">
        <Flex direction="column" gap="4">
          <Badge size="3" color="gray">
            Para fazer (2)
          </Badge>

          {tasksTodo.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Flex>
        <Flex direction="column" gap="4">
          <Badge size="3" color="yellow">
            Em progresso (2)
          </Badge>

          {tasksInProgress.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Flex>

        <Flex direction="column" gap="4">
          <Badge size="3" color="green">
            Concluídas (2)
          </Badge>

          {tasksDone.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Flex>
      </Grid>
    </ScrollArea>
  );
};