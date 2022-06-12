package com.sp.service;

import com.sp.repository.VehicleRepository;

public class DisplayRunnable implements Runnable {

	private VehicleRepository vrepo;
	boolean isEnd = false;

	public DisplayRunnable(VehicleRepository vrepo) {
		this.vrepo = vrepo;
	}

	@Override
	public void run() {
		FireForceService service = new FireForceService();
		while (!this.isEnd) {
			try {
				Thread.sleep(1000);
				service.gestionFire();
				
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		
		System.out.println("Runnable DisplayRunnable ends.... ");
	}

	public void stop() {
		this.isEnd = true;
	}

}

