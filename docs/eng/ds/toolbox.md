# ML Toolbox

## Colab

### Avoid timeout

```js
function ClickConnect(){
  console.log("Working"); 
  document.querySelector("colab-toolbar-button#connect").click() 
}
setInterval(ClickConnect,60000)
```

```js
function ClickConnect(){
  console.log("Working"); 
  document.querySelector("colab-toolbar-button").click() 
}
setInterval(ClickConnect,60000)
```

### Download artifact

```python
from google.colab import files
files.download('/tmp/model_CartPole-v0.h5')
```

### Check TPU & GPU

Since Colab doesn't garantee any TPU or GPU when the runtime starts, it's a good idea to do a check before wasting time training on a slow CPU:

```python
!pip install gputil
```

```python
%tensorflow_version 2.x
import tensorflow as tf
import GPUtil
print("Tensorflow version " + tf.__version__)
try:
  tpu = tf.distribute.cluster_resolver.TPUClusterResolver()  # TPU detection
  print('Running on TPU ', tpu.cluster_spec().as_dict()['worker'])
  tf.config.experimental_connect_to_cluster(tpu)
  tf.tpu.experimental.initialize_tpu_system(tpu)
  tpu_strategy = tf.distribute.experimental.TPUStrategy(tpu)
except ValueError:
  print('ERROR: Not connected to a TPU runtime!')
  GPUs = GPUtil.getGPUs()
  print('GPU count: ' + str(len(GPUs)))
```

::: tip Note
Tensorflow 2.0 eager execution, as of now, supports cloud TPU, but not Colab TPU. If you are using eager execution, you are better off with GPU.
:::

<Disqus/>
