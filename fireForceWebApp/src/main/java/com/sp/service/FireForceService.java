package com.sp.service;

import java.util.Optional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.model.dto.VehicleDto;
import com.sp.model.Facility;
import com.sp.model.Vehicle;

@Service
public class FireForceService {

	static final String URL_CREATE_VEHICLE = "http://vps.cpe-sn.fr:8081/vehicle/10eec12c-ac37-4479-b4a8-707559a6ee62";

	static final String URL_UPDATE_VEHICLE = "http://vps.cpe-sn.fr:8081/vehicle/10eec12c-ac37-4479-b4a8-707559a6ee62/";

	static final String URL_GET_VEHICLE = "http://vps.cpe-sn.fr:8081/vehicle/";
	
	static final String URL_GET_ALL_VEHICLE = "http://vps.cpe-sn.fr:8081/vehicle/";
	
	static final String URL_GET_FACILITY = "http://vps.cpe-sn.fr:8081/facility/";
	
	static final String URL_GET_ALL_FACILITY = "http://vps.cpe-sn.fr:8081/facility";
	
	static final String URL_ADD_FACILITY = "http://vps.cpe-sn.fr:8081/facility";
	
	static final String URL_GET_ALL_FIRE = "http://vps.cpe-sn.fr:8081/fire";
	
	static final String URL_GET_FIRE = "http://vps.cpe-sn.fr:8081/fire/";
	
	static final String URL_GET_ALL_TEAM = "http://vps.cpe-sn.fr:8081/team";
	
	static final String URL_GET_TEAM = "http://vps.cpe-sn.fr:8081/team/";
	


	public void addVehicle(Vehicle v) {

		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
		headers.setContentType(MediaType.APPLICATION_JSON);

		// Data attached to the request.
		HttpEntity<Vehicle> requestBody = new HttpEntity<>(v, headers);

		// Send request with POST method.
		Vehicle v2 = restTemplate.postForObject(URL_CREATE_VEHICLE, requestBody, Vehicle.class);

		if (v2 != null) {

			System.out.println("Vehicle created: " + v2.getId());
		} else {
			System.out.println("Something error!");
		}

	}

	public void updateVehicle(Vehicle v,String id) {

		HttpHeaders headers = new HttpHeaders();
		headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);

		RestTemplate restTemplate = new RestTemplate();

		// Data attached to the request.
		HttpEntity<Vehicle> requestBody = new HttpEntity<>(v, headers);

		// Send request with PUT method.
		restTemplate.put(URL_UPDATE_VEHICLE+id, requestBody, new Object[] {});

	}
	
	public String getVehicle(String id) {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
		// Request to return JSON format
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("my_other_key", "my_other_value");

		// HttpEntity<String>: To get result as String.
		HttpEntity<String> entity = new HttpEntity<String>(headers);


		// Send request with GET method, and Headers.
		ResponseEntity<String> response = restTemplate.exchange(URL_GET_VEHICLE+id, //
				HttpMethod.GET, entity, String.class);

		String result = response.getBody();

		return(result);
	}
	
	public String getAllVehicle() {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
		// Request to return JSON format
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("my_other_key", "my_other_value");

		// HttpEntity<String>: To get result as String.
		HttpEntity<String> entity = new HttpEntity<String>(headers);


		// Send request with GET method, and Headers.
		ResponseEntity<String> response = restTemplate.exchange(URL_GET_ALL_VEHICLE, //
				HttpMethod.GET, entity, String.class);

		String result = response.getBody();

		return(result);
	}

	
	public String getFacility(String id) {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
		// Request to return JSON format
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("my_other_key", "my_other_value");

		// HttpEntity<String>: To get result as String.
		HttpEntity<String> entity = new HttpEntity<String>(headers);


		// Send request with GET method, and Headers.
		ResponseEntity<String> response = restTemplate.exchange(URL_GET_FACILITY+id, //
				HttpMethod.GET, entity, String.class);

		String result = response.getBody();

		return(result);
	}
	
	public String getAllFacilities() {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
		// Request to return JSON format
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("my_other_key", "my_other_value");

		// HttpEntity<String>: To get result as String.
		HttpEntity<String> entity = new HttpEntity<String>(headers);


		// Send request with GET method, and Headers.
		ResponseEntity<String> response = restTemplate.exchange(URL_GET_ALL_FACILITY, //
				HttpMethod.GET, entity, String.class);

		String result = response.getBody();

		return(result);
	}
	
	public void addFacility(Facility f) {

		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
		headers.setContentType(MediaType.APPLICATION_JSON);

		// Data attached to the request.
		HttpEntity<Facility> requestBody = new HttpEntity<>(f, headers);

		// Send request with POST method.
		Facility f2 = restTemplate.postForObject(URL_ADD_FACILITY, requestBody, Facility.class);

		if (f2 != null) {

			System.out.println("Vehicle created: " + f2.getId());
		} else {
			System.out.println("Something error!");
		}

	}
	
	public String getAllFire() {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
		// Request to return JSON format
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("my_other_key", "my_other_value");

		// HttpEntity<String>: To get result as String.
		HttpEntity<String> entity = new HttpEntity<String>(headers);


		// Send request with GET method, and Headers.
		ResponseEntity<String> response = restTemplate.exchange(URL_GET_ALL_FIRE, //
				HttpMethod.GET, entity, String.class);

		String result = response.getBody();

		return(result);
	}
	
	public String getFire(String id) {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
		// Request to return JSON format
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("my_other_key", "my_other_value");

		// HttpEntity<String>: To get result as String.
		HttpEntity<String> entity = new HttpEntity<String>(headers);


		// Send request with GET method, and Headers.
		ResponseEntity<String> response = restTemplate.exchange(URL_GET_FIRE+id, //
				HttpMethod.GET, entity, String.class);

		String result = response.getBody();

		return(result);
	}
	
}
