import { ref, onMounted, onUnmounted } from "vue";

interface MouseTrackingData {
  x: number;
  y: number;
}

export function useMouseTracking() {
  const broadcastChannel = new BroadcastChannel("mouseTracking");
  const x = ref(0);
  const y = ref(0);

  function handleMouseMove(event: MouseEvent) {
    x.value = event.x;
    y.value = event.y;

    broadcastChannel.postMessage({
      x: x.value,
      y: y.value,
    });
  }

  function handleBroadcast(event: MessageEvent<MouseTrackingData>) {
    x.value = event.data.x;
    y.value = event.data.y;
  }

  onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);
    broadcastChannel.addEventListener("message", handleBroadcast);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    broadcastChannel.removeEventListener("message", handleBroadcast);
    broadcastChannel.close();
  });

  return {
    broadcastChannel,
    x,
    y,
  };
}
