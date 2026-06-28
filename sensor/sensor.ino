#include "DHTesp.h"

// ─── Pinos ────────────────────────────────────────────────
#define DHT_PIN        13
#define TRIG_PIN       12
#define ECHO_PIN       14

// ─── Constantes ───────────────────────────────────────────
#define SOUND_VELOCITY  0.034
#define MAX_DISTANCE    200
#define LIMIAR_CM       80
#define INTERVALO_MS    1000    // mudar para 1800000 depois (30 min)

// ─── Objetos e variáveis ──────────────────────────────────
DHTesp dht;
unsigned long ultimaLeituraTemp = 0;
bool passagemAtiva = false;

// ──────────────────────────────────────────────────────────
void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  digitalWrite(TRIG_PIN, LOW);
  dht.setup(DHT_PIN, DHTesp::DHT11);
}

// ──────────────────────────────────────────────────────────
void loop() {
  unsigned long agora = millis();
  float distancia = medirDistancia();

  // ── Deteção de passagem ──────────────────────────────────
  if (distancia > 0 && distancia < LIMIAR_CM) {
    if (!passagemAtiva) {
      passagemAtiva = true;
      Serial.print("[PASSAGEM] ");
      Serial.print(distancia);
      Serial.println(" cm");
    }
  } else {
    passagemAtiva = false;
  }

  // ── Leitura de temp/humidade ─────────────────────────────
  if (agora - ultimaLeituraTemp >= INTERVALO_MS) {
    ultimaLeituraTemp = agora;

    TempAndHumidity leitura;
    do {
      leitura = dht.getTempAndHumidity();
      if (dht.getStatus() != 0) delay(500);
    } while (dht.getStatus() != 0);

    Serial.print("[TEMP/HUM] ");
    Serial.print(leitura.temperature);
    Serial.print(" °C | ");
    Serial.print(leitura.humidity);
    Serial.println(" %");
  }

  delay(100);
}

// ──────────────────────────────────────────────────────────
float medirDistancia() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duracao = pulseIn(ECHO_PIN, HIGH, (MAX_DISTANCE * 2 / SOUND_VELOCITY));
  if (duracao == 0) return -1;
  return (duracao * SOUND_VELOCITY) / 2.0;
}