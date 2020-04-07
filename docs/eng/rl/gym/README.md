# Open AI Gym

## Readings

- [Tensorflow cartpole tutorial](https://blog.tensorflow.org/2018/07/deep-reinforcement-learning-keras-eager-execution.html)

## Snippets

- How to take a random action:

```python
import gym

env = gym.make('CartPole-v0')
random_action = env.action_space.sample()
observation, reward, done, info = env.step(random_action)
```
