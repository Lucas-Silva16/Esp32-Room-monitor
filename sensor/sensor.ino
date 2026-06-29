#include "DHTesp.h"
#include "secret.h"
#include <WiFi.h>
#include <time.h>

// --------------- Pinos ---------------
#define DHT_PIN        13
#define TRIG_PIN       12
#define ECHO_PIN       14

// --------------- Constantes ---------------
#define SOUND_VELOCITY  0.034
#define MAX_DISTANCE    200
#define LIMIAR_CM       80
#define INTERVALO_MS    1800000   

// --------------- NTP ---------------
#define NTP_SERVER  "pool.ntp.org"

// --------------- Objetos e variáveis ---------------
DHTesp dht;
unsigned long ultimaLeituraTemp = 0;
bool passagemAtiva = false;

// Devolve hora no formato exemplo "2026-06-29 13:58:25"
String horaAtual() {
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) return "hora-desconhecida";
  char buffer[20];
  strftime(buffer, sizeof(buffer), "%Y-%m-%d %H:%M:%S", &timeinfo);
  return String(buffer);
}

void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  digitalWrite(TRIG_PIN, LOW);
  dht.setup(DHT_PIN, DHTesp::DHT11);

  // --------------- Ligar ao WiFi de forma silenciosa ---------------
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  while (WiFi.status() != WL_CONNECTED) delay(500);

  // --------------- Sincronizar hora via NTP (Com horário de Verão) ---------------
  setenv("TZ", "WET0WEST,M3.5.0/1,M10.5.0", 1);
  tzset();
  configTime(3600, 0, NTP_SERVER);

  struct tm timeinfo;
  while (!getLocalTime(&timeinfo)) delay(500);
}

void loop() {
  unsigned long agora = millis();
  float distancia = medirDistancia();

  // --------------- Deteção de passagem ---------------
  if (distancia > 0 && distancia < LIMIAR_CM) {
    if (!passagemAtiva) {
      passagemAtiva = true;
      Serial.print("[PASSAGEM] ");
      Serial.print(distancia);
      Serial.print(" cm | ");
      Serial.println(horaAtual());
    }
  } else {
    passagemAtiva = false;
  }

  // --------------- Leitura de temp/humidade ---------------
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
    Serial.print(" % | ");
    Serial.println(horaAtual());
  }

  delay(100);
}

// ------------------------------------------------------------
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